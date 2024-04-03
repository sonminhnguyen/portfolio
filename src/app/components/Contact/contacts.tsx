"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IconContext } from "react-icons";
import { FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa6";
import { SlSocialVkontakte } from "react-icons/sl";
import ContactForm from "./form";

// const formSchema = z.object({
//   email: z.string().min(2, {
//     message: "email must be at least 2 characters.",
//   }),
//   name: z.string().min(2, {
//     message: "name must be at least 2 characters.",
//   }),
// services: z.array(z.string()).refine((value) => value.some((item) => item), {
//     message: "You have to select at least one item.",
//   }),
//   phone: z.string().min(2, {
//     message: "message must be at least 2 characters.",
//   }),
//   message: z.string().min(2, {
//     message: "message must be at least 2 characters.",
//   }),
//   term: z.string().min(2, {
//     message: "message must be at least 2 characters.",
//   }),
// });

const services = [
  {
    id: "web",
    label: "Web Development",
  },
  {
    id: "data",
    label: "Data Engineer",
  },
  {
    id: "app",
    label: "Windows Application Development",
  },
];
const Contacts = () => {
  const [phone, setPhone] = useState<any>();

  //   const form = useForm<z.infer<typeof formSchema>>({
  const form = useForm<any>({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      services: [],
      phone: phone,
      message: "",
      term: [],
    },
  });
  function onSubmit(values: any) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    console.log(JSON.stringify(values, null, 2));
    form.reset();
  }
  return (
    <div id="contacts" className="flex flex-col [&>*]:my-4 mx-4">
      <div className="w-[500px] text-[40px] font-medium">CONTACTS</div>
      <div className="grid grid-cols-2 w-full m-auto">
        <div className="font-medium text-3xl">
          <div>
            <p>My number:</p>
            <p className="mt-4 mb-8 ml-8">+84934212750</p>
          </div>
          <div>
            <p>Email:</p>
            <p className="mt-4 mb-8 ml-8">nminhson.cs@gmail.com</p>
          </div>
          <div>
            <p>Location:</p>
            <p className="mt-4 mb-8 ml-8">Ho Chi Minh, Viet Nam</p>
          </div>
          <IconContext.Provider
            value={{
              color: "tear",
              size: "1em",
            }}
          >
            <div className="flex flex-row space-x-4">
              <a
                href="https://www.linkedin.com/in/sonnguyencs"
                className="hover:bg-slate-700"
              >
                <FaLinkedin />
              </a>
              <a href="https://vk.com/wolfmsqg" className="hover:bg-slate-700">
                <SlSocialVkontakte />
              </a>
              <a href="https://t.me/nminhson" className="hover:bg-slate-700">
                <FaTelegram />
              </a>
              <a href="https://www.instagram.com/nminhson.cs/" className="hover:bg-slate-700">
                <FaInstagram />
              </a>
            </div>
          </IconContext.Provider>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
