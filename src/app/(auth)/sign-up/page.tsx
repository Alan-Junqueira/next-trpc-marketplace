"use client";

import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  TSignUpInputs,
  signUpSchema,
} from "@/lib/validators/sign-up-validator";
import { trpc } from "@/trpc/client";
import { toast } from "sonner"
import { ZodError } from "zod";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpInputs>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({
    onError: (err) => {
      if(err.data?.code === "CONFLICT"){
        toast.error("This email is already in use. Sign in instead?")
        return
      }

      if(err instanceof ZodError){
        toast.error(err.issues[0].message ?? "Something went wrong")
        return
      }

      toast.error("Something went wrong. Please try again.")
    },
    onSuccess: ({sentToEmail}) => {
      toast.success(`Verification email sent to ${sentToEmail}.`)
      router.push(`/verify-email?to=${sentToEmail}`)
    }
  });

  const handleSignUp = async ({ email, password }: TSignUpInputs) => {
    mutate({
      email,
      password,
    });
  };

  return (
    <>
      <div className="container relative flex flex-col items-center justify-center pt-20 lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[21.875rem]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />

            <h1 className="text-2xl font-bold">Create an account</h1>

            <Link
              href="/sign-in"
              className={buttonVariants({
                variant: "link",
                className: "gap-1",
              })}
            >
              Already have an account? Sign-in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    id="email"
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    id="password"
                    type="password"
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder="***********"
                  />
                </div>

                <Button type="submit">Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
