import { motion } from "framer-motion";

import warrior from "../assets/portfolio/warriors-night.jpg";
import youth from "../assets/portfolio/royal-youth.jpg";
import prophetic from "../assets/portfolio/prophetic-service.jpg";


function Portfolio() {


const projects = [

{
image: warrior,
title:"Warriors Night",
category:"Event Branding",
description:
"Complete visual identity including posters, digital campaigns and promotional designs created for a worship experience."
},


{
image:youth,
title:"Royal Youth Kesha",
category:"Ministry Branding",
description:
"A youthful and energetic brand experience designed to communicate purpose, passion and community."
},


{
image:prophetic,
title:"Prophetic Service",
category:"Digital Campaign",
description:
"Social media visuals and digital assets designed to increase engagement and strengthen online communication."
}

];



return (

<section

id="portfolio"

className="
bg-neutral-950
text-white
py-16
lg:py-28
px-6
md:px-8
relative
overflow-hidden
"


>


{/* Background Glow */}

<div className="
absolute
right-0
top-20
w-[400px]
h-[400px]
bg-cyan-400/10
blur-[120px]
rounded-full
">
</div>





<div className="max-w-7xl mx-auto relative z-10">





<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.8}}

viewport={{once:true}}

>







{/* HEADER */}


<div className="
mb-12
lg:mb-16
">


<p className="
text-cyan-400
uppercase
tracking-widest
text-sm
mb-4
">


Selected Works


</p>



<h2 className="
text-4xl
md:text-6xl
font-extrabold
leading-tight
">


Creative Projects
<br/>

That Tell Stories


</h2>




<p className="
text-gray-400
max-w-3xl
mt-6
text-lg
">


A collection of branding, ministry visuals,
event experiences and digital campaigns
created by HMM Graphics.


</p>



</div>









{/* FILTER BUTTONS */}


<div className="
flex
flex-wrap
gap-3
mb-12
">


{

[
"All",
"Brand Identity",
"Events",
"Ministry",
"Social Media",
"Motion"

].map((item,index)=>(


<button

key={index}

className="
px-5
py-2
rounded-full
border
border-white/10
bg-white/5
text-gray-300
hover:border-cyan-400
hover:text-cyan-400
transition
"


>


{item}


</button>


))


}



</div>









{/* PROJECT GRID */}


<div className="
grid
md:grid-cols-3
gap-8
">





{

projects.map((project,index)=>(



<motion.div


key={index}


initial={{

opacity:0,

y:50

}}


whileInView={{

opacity:1,

y:0

}}


transition={{

duration:0.6,

delay:index*0.15

}}


viewport={{once:true}}



className="
group
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
overflow-hidden
hover:border-cyan-400/50
hover:-translate-y-3
transition
duration-500
"


>






{/* IMAGE */}


<div className="
relative
overflow-hidden
">


<img

src={project.image}

alt={project.title}

className="
w-full
h-80
object-cover
group-hover:scale-110
transition
duration-700
"


/>




<div className="
absolute
inset-0
bg-black/20
group-hover:bg-black/40
transition
">
</div>



</div>









{/* CONTENT */}


<div className="
p-7
">


<p className="
text-cyan-400
text-sm
font-semibold
uppercase
tracking-wide
">


{project.category}


</p>





<h3 className="
text-2xl
font-bold
mt-3
">


{project.title}


</h3>






<p className="
text-gray-400
mt-4
leading-relaxed
">


{project.description}


</p>







<a

href="#contact"

className="
inline-block
mt-6
text-cyan-400
font-semibold
hover:underline
"


>


Start Similar Project →

</a>





</div>








</motion.div>


))


}





</div>








</motion.div>





</div>





</section>


);


}


export default Portfolio;