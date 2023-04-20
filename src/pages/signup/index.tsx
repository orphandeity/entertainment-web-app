import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";

export const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Entertainment Web App | Sign Up</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
      </Head>
      <div className="flex min-h-screen flex-col items-center gap-[3.65rem]">
        <Link href={"/"} className="mt-12">
          <Image src={logo} alt="" />
        </Link>
        <div className="item-center flex w-[20.4375rem] flex-col gap-6 rounded-[0.625rem] bg-_semi-dark-blue p-6">
          <form className="flex flex-col gap-10 ">
            <p className="text-heading-lg font-light">Sign Up</p>
            <fieldset className="space-y-6 text-body-md font-light text-white">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-transparent border-b-_greyish-blue bg-transparent px-4 pb-4 pt-0 caret-_red selection:bg-_red placeholder:opacity-50 focus:border-transparent focus:border-b-white focus:ring-0"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full border-transparent border-b-_greyish-blue bg-transparent px-4 pb-4 pt-0 caret-_red selection:bg-_red placeholder:opacity-50 focus:border-transparent focus:border-b-white focus:ring-0"
              />
              <input
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                placeholder="Repeat Password"
                className="w-full border-transparent border-b-_greyish-blue bg-transparent px-4 pb-4 pt-0 caret-_red selection:bg-_red placeholder:opacity-50 focus:border-transparent focus:border-b-white focus:ring-0"
              />
            </fieldset>
            <button className="rounded-[0.375rem] bg-_red py-[0.875rem] text-body-md font-light">
              Create an account
            </button>
          </form>
          <p className="text-center text-body-md font-light">
            Already have an account?{" "}
            <span className="text-_red">
              <Link href={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
