import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"


 const EmptyCard = ()=>  {
  return (
    <Card className="w-[250px] relative h-[300px] flex justify-center items-center bg-[#121212] hover:border-neutral-700">
      <Link className="absolute inset-0" href={'/uploadnew'}></Link>
        <CardTitle className="text-2xl cursor-pointer">UPLOAD +</CardTitle>
       
    </Card>
  )
}

export default EmptyCard