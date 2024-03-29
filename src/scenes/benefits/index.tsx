import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "../../shared/types"
import { motion } from "framer-motion"
import HText from "../../shared/Text"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Benefit from "./Benefit"
import ActionButton from "../../shared/ActionButton"

const benefits:Array <BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit velit beatae possimus et voluptates alias vitae mollitia, fugit vero."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit velit beatae possimus et voluptates alias vitae mollitia, fugit vero."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit velit beatae possimus et voluptates alias vitae mollitia, fugit vero."
    },
] 

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage)=>void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
    >
<motion.div
onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
>
    {/*Header*/}
<motion.div 
className="md:my-5 md:w-3/5 "
initial="hidden"
whileInView="visible"
viewport={{once: true, amount: 0.5}}
transition={{duration: 0.5}}
variants={{
    hidden: {opacity:0, x:-50},
    visible: {opacity:1, x:0}
}}
>
   <HText>MORE THAN JUST A GYM.</HText>
   <p className="my-5 text-sm">
    We provide world class fitness equipments, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
   </p>
</motion.div>
{/*Benefits*/}

<motion.div 
className=" md:flex items-center justify-between gap-8 mt-5"
initial="hidden"
whileInView="visible"
viewport={{once: true, amount: 0.5}}
variants={container}
>
{benefits.map((benefit:BenefitType)=>(
<Benefit
key={benefit.title}
title={benefit.title}
icon={benefit.icon}
description={benefit.description}
setSelectedPage={setSelectedPage}
/>
))}
</motion.div>

{/*Graphics and description*/}
<div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
    {/*Graphic*/}
    <img 
    className="mx-auto"
    alt="benefits-page-graphics"
    src={BenefitsPageGraphic}
    />
    {/*Description*/}
    <div>
        {/*Title*/}
        <div className="relative ">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves ">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{once: true, amount: 0.5}}
transition={{duration: 0.5}}
variants={{
    hidden: {opacity:0, x:50},
    visible: {opacity:1, x:0}
}}
>
    <HText>
        MILLIONS OF HAPPY MEMBERS GETTING {" "}
        <span className="text-primary-500 ">FIT</span>
    </HText>
</motion.div>
            </div>
        </div>

 {/*Descript*/}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{once: true, amount: 0.5}}
transition={{ delay:0.2, duration: 0.5}}
variants={{
    hidden: {opacity:0, x:50},
    visible: {opacity:1, x:0}
}}
>
    <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quos eos ducimus voluptatibus id laboriosam atque nostrum, doloribus eaque ipsa unde. Deserunt in dolores id dolore neque! Mollitia, cum atque tempora, assumenda numquam deserunt consequuntur a veniam voluptatum molestias omnis harum molestiae?</p>
    <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non iste velit in, expedita quas aliquid alias eligendi ut accusamus optio, quidem delectus eaque sunt maiores officiis dolor sint eos accusantium.</p>
</motion.div>

       {/*Button*/} 
<div className="relative mt-16">
    <div className="before:absolute before:-bottom-20 before:-right-10 before:z-[-1] before:content-sparkles">
<ActionButton setSelectedPage={setSelectedPage}>
Join Now
</ActionButton>
    </div>
</div>

    </div>
</div>

</motion.div>
    </section>
  )
}

export default Benefits