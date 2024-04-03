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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


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
const ContactForm = () => {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="[&>*]:my-2 mb-4">
                <FormLabel className="text-3xl">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your-Email" {...field} />
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="[&>*]:my-2 mb-4">
                <FormLabel className="text-3xl">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your-Name" {...field} />
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <div className="[&>*]:my-2 mb-4">
                <FormLabel className="text-3xl">Phone</FormLabel>
                <div className="text-black">
                  <PhoneInput
                    country={"vn"}
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="services"
          render={() => (
            <FormItem>
              <div className="[&>*]:my-2 mb-4">
                <FormLabel className="text-3xl">Services</FormLabel>
                {services.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="services"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              className="border-white data-[state=checked]:bg-white data-[state=checked]:text-primary"
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value: any) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-medium text-lg">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="[&>label]:font-bold [&>label]:my-32">
              <div className="[&>*]:my-2 mb-4">
                <FormLabel className="text-3xl">Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="A small message to me..." {...field} />
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="term"
          render={({ field }) => (
            <FormItem>
              <div className="[&>*]:my-4">
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      className="border-white data-[state=checked]:bg-white data-[state=checked]:text-primary"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree with the personal data processing policy
                    </label>
                  </div>
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        <Button className="font-bold" variant="outline" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
