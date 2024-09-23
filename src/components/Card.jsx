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


const CardList = () => {
    return (
        <Card
            className="flex-col gap-3 w-[250px] relative h-[300px] flex justify-center items-start bg-[#121212] hover:border-neutral-700 px-7">
            <div>
                <span>Title : </span>
                <span>New</span>
            </div>

            <div>
                <span>Description : </span>
                <span>New</span>
            </div>

            <div>
                <span>Uploded to : </span>
                <span>New</span>
            </div>

            <div>
                <span>Date : </span>
                <span>New</span>
            </div>

        </Card>
    )
}

export default CardList;