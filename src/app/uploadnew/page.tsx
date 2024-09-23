// @ts-nocheck
"use client";
import { useState } from "react";
import axios from "axios";
import { FaCheck, FaPaste } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaRegCopy } from "react-icons/fa";
import Link from "next/link";
import { Loader2 } from "lucide-react"
import { GenerateAuthUrlFn, GetPresignedUrlFn } from "../../../axios/POST";

const page = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    file: null,
  });

  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authUrl, setAuthUrl] = useState(null);
  const handleCopy  = async()=>{
    try {
        await navigator.clipboard.writeText(authUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
  }
  function handleChange(event) {
    console.log(event, "event");
    const inputValue =
      event?.target.name == "file" ? event.target.files[0] : event.target.value;

    setForm({
      ...form,
      [event.target.name]: inputValue,
    });
  }

  function handleCancel(){
    setIsLoading(false);
  }

  async function uploadToS3(event) {
    try{
      setIsLoading(true)
      event.preventDefault();
      const formData = new FormData(event.target);
      const file = formData.get("file");
      const title = formData.get("title");
      const description = formData.get("description");
      if (!file) {
        console.log("no file exists");
        setIsLoading(false)
        return null;
      }
  
      const fileType = file.type;
      console.log(fileType, file.type, "filetype");
      // const { data } = await axios.post(
      //   `http://localhost:8000/api/v1/presignedurl`,
      //   { title, description, fileType }
      // );
      const {data} = await GetPresignedUrlFn({
        title, description, fileType
      })
      const { uploadUrl, Key, id } = data;
      console.log("Data ==>",data)
      axios.put(uploadUrl, file).then(async () => {
        // const response = await axios.post(
        //   "http://localhost:8000/api/v1/generateAuthUrl",
        //   { id }
        // );
        const response = await GenerateAuthUrlFn({id})
        console.log(response)
        if (response) {
          setAuthUrl(response.data.authUrl);
          console.log(response.data.authUrl, "auuuuth");
        }
        setIsLoading(false)
      });
    }catch(err){
      console.log(err);
      setIsLoading(false);
    }
  }
  return (
    <div className="mt-14 flex justify-center items-center">
      <Card className="w-[550px] bg-[#121212]">
        <form onSubmit={uploadToS3}>
          <CardHeader>
            <CardTitle>Upload video</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  onChange={handleChange}
                  placeholder="Enter the title of the video"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  className="h-32 pl-2 bg-[#121212] border rounded-md"
                  placeholder="Enter your description"
                ></textarea>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="file">File</Label>
                <Input
                  id="file"
                  name="file"
                  className="cursor-pointer"
                  onChange={handleChange}
                  type="file"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link className=" " href={"/upload"}>
              <Button variant={"outline"} onClick={handleCancel}>Cancel</Button>
            </Link>
            {
              isLoading == true ? (
                <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
              ) : ( <Button type="submit">Upload</Button>)
            }
           
          </CardFooter>
        </form>
        {authUrl && (
            <div className="w-[92%] m-auto my-4">

            
          <div className="flex w-full my-2  m-auto gap-4">
            <Input
              id="url"
              disabled
              name="url"
              type="text"
              value={authUrl}
            />
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() => handleCopy()}
            >
              {copied ? (
                <FaCheck size={14} className="text-gray-600" />
              ) : (
                <FaRegCopy
                  size={14}
                  className="text-gray-600 hover:text-blue-600"
                />
              )}
            </Button>
          </div>
          <p className="text-gray-400 text-xs">  Please open the link and grant access using the account you would like to upload to. </p>
          </div>    
        )}
      </Card>
    </div>
  );
};

export default page;
