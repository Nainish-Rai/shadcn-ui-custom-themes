"use client";
import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { HslaColorPicker } from "react-colorful";
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
import ColorChanger from "./components/ColorChanger";

export default function Home() {
  const variables = [
    "--background",
    "--foreground",
    "--card",
    "--card-foreground",
    "--popover",
    "--popover-foreground",
    "--primary",
    "--primary-foreground",
    "--secondary",
    "--secondary-foreground",
    "--muted",
    "--muted-foreground",
    "--accent",
    "--accent-foreground",
    "--destructive",
    "--destructive-foreground",
    "--border",
    "--input",
    "--ring",
  ];

  return (
    <main className="w-full flex gap-24 justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input placeholder="name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Input placeholder="framework" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
      <div className="flex flex-col">
        {variables.map((variable) => (
          <ColorChanger key={variable} variable={variable} />
        ))}
      </div>
    </main>
  );
}
