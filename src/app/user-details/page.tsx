import BlurFade from "@/components/magicui/blur-fade";
import DetailForm from "./_components/Form";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import UserDetail from "@/models/userdetails.model";
import mongoose from "mongoose";
import connectDB from "@/db";
import GradientAnimatedText from "@/components/GradientAnimatedText";

type Props = {};

const Page = async (props: Props) => {
  const session = await getServerSession(authOptions);

  if (!session?.user.id && !session?.user.email) {
    return redirect("/");
  }

  await connectDB();

  const data = await UserDetail.findOne({
    userId: new mongoose.Types.ObjectId(session?.user.id),
  }).select("-userId -createdAt -updatedAt -_id -__v");

  const userData = {
    department: data.department,
    year: data.year,
    semester: data.semester,
    enrollmentNo: data.enrollmentNo,
    phoneNumber: data.phoneNumber,
  };

  return (
    <div className="mt-8 mb-36">
      <GradientAnimatedText className="font-bold tracking-tighter text-3xl xl:text-4xl/none ">
        Let&apos;s Get You Started
      </GradientAnimatedText>
      <BlurFade inView className="my-8 mx-8">
        <DetailForm userDetails={userData} />
      </BlurFade>
    </div>
  );
};
export default Page;
