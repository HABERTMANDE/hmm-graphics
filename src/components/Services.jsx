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
number:"01",
icon:<Palette size={35}/>,
title:"Brand Identity",
description:
"We create powerful brand systems including logos, visual language and identity guidelines that make businesses memorable."
},


{
number:"02",
icon:<PenTool size={35}/>,
title:"Creative Design",
description:
"Professional posters, flyers, social media graphics and digital designs built to communicate your message clearly."
},


{
number:"03",
icon:<Megaphone size={35}/>,
title:"Event Experiences",
description:
"Complete event branding solutions for conferences, ministries, launches and campaigns that leave lasting impressions."
},


{
number:"04",
icon:<Video size={35}/>,
title:"Media Production",
description:
"Creative video adverts, motion graphics and digital content that transform ideas into engaging experiences."
},


{
number:"05",
icon:<Printer size={35}/>,
title:"Print Solutions",
description:
"Premium printing designs including banners, brochures, business cards and promotional materials."
},


{
number:"06",
icon:<GraduationCap size={35}/>,
title:"HMM Design Academy",
description:
"Training the next generation of creatives in design, branding, freelancing and creative entrepreneurship."
}

];





return (

<section

id="services"

className="
bg-neutral-950
text-white
py-16
lg:py-28
px-6
md:px-20
relative
overflow-hidden
"


>





{/* Background Glow */}

<div className="
absolute
left-0
top-20
w-[400px]
h-[400px]
bg-cyan-400/10
blur-[120px]
rounded-full
">
</div>







<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.8}}

viewport={{once:true}}

className="
max-w-7xl
mx-auto
relative
z-10
"

>









{/* HEADER */}


<div className="
mb-14
">


<p className="
text-cyan-400
uppercase
tracking-widest
text-sm
mb-4
">


What We Do


</p>



<h2 className="
text-4xl
md:text-6xl
font-extrabold
leading-tight
">


Creative Solutions
<br/>

Built For Impact


</h2>






<p className="
text-gray-400
mt-6
max-w-3xl
text-lg
">


From branding and design to media production
and creative training, HMM Graphics helps
ideas become powerful visual experiences.


</p>



</div>









{/* SERVICES GRID */}



<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
">






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

delay:index*0.1

}}


viewport={{once:true}}




className="
group
relative
bg-white/5
backdrop-blur-xl
border
border-white/10
p-8
rounded-3xl
hover:border-cyan-400/60
hover:-translate-y-3
transition
duration-500
"


>







{/* NUMBER */}


<div className="
absolute
top-6
right-7
text-5xl
font-bold
text-white/5
">


{service.number}


</div>







<div className="
text-cyan-400
mb-6
group-hover:scale-110
transition
">


{service.icon}


</div>







<h3 className="
text-2xl
font-bold
mb-4
">


{service.title}


</h3>







<p className="
text-gray-400
leading-relaxed
">


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