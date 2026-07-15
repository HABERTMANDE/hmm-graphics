import { motion } from "framer-motion";
import {
  Palette,
  PenTool,
  Megaphone,
  Video,
  Printer,
  GraduationCap
} from "lucide-react";


export default function Services() {


const services = [

{
icon: <Palette size={35}/>,
title: "Brand Identity",
description:
"Creating memorable visual identities through logos, brand systems, and professional design guidelines."
},


{
icon: <PenTool size={35}/>,
title: "Graphic Design",
description:
"Professional posters, flyers, social media graphics, advertisements and creative visual solutions."
},


{
icon: <Megaphone size={35}/>,
title: "Event Branding",
description:
"Complete branding solutions for conferences, churches, launches, campaigns and special events."
},


{
icon: <Video size={35}/>,
title: "Media Production",
description:
"Video adverts, motion graphics, voiceovers and digital content that communicates your message."
},


{
icon: <Printer size={35}/>,
title: "Printing Solutions",
description:
"High-quality printing designs including banners, business cards, brochures and promotional materials."
},


{
icon: <GraduationCap size={35}/>,
title: "HMM Design Academy",
description:
"Training upcoming designers in graphic design, branding, freelancing and creative entrepreneurship."
}

];



return (

<section 
id="services"
className="bg-slate-950 text-white py-24 px-8 md:px-20"
>


<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.8}}

viewport={{once:true}}

>


<div className="text-center mb-16">


<h2 className="text-4xl md:text-5xl font-bold">

Our Creative Services

</h2>



<p className="text-gray-400 mt-5 max-w-2xl mx-auto">

Transforming ideas into powerful visual experiences
through creativity, technology and strategic design.

</p>


</div>





<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


{
services.map((service,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.5,
delay:index * 0.1
}}

viewport={{
once:true
}}


className="
bg-slate-900
border
border-cyan-400/20
p-8
rounded-2xl
hover:border-cyan-400
hover:-translate-y-2
transition
"


>


<div className="text-cyan-400 mb-5">

{service.icon}

</div>



<h3 className="text-2xl font-bold mb-4">

{service.title}

</h3>



<p className="text-gray-400 leading-relaxed">

{service.description}

</p>



</motion.div>


))

}


</div>



</motion.div>


</section>

)

}