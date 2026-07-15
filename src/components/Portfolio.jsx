import { motion } from "framer-motion";

import warrior from "../assets/portfolio/warriors-night.jpg";
import youth from "../assets/portfolio/royal-youth.jpg";
import prophetic from "../assets/portfolio/prophetic-service.jpg";


function Portfolio() {


const projects = [

{
image: warrior,
title: "Warriors Night",
category: "Event Branding",
description:
"Complete event branding experience including promotional posters, digital campaigns and visual identity for a worship gathering."
},


{
image: youth,
title: "Royal Youth Kesha",
category: "Church & Ministry",
description:
"Youth conference branding designed to communicate energy, purpose and a strong ministry identity."
},


{
image: prophetic,
title: "Prophetic Service",
category: "Digital Media",
description:
"Social media campaign design created to enhance communication, engagement and online presence."
}

];



return (

<section

id="portfolio"

className="
bg-slate-900
py-24
px-8
"


>


<div className="max-w-7xl mx-auto">



<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.8}}

viewport={{once:true}}

>




<div className="text-center mb-14">


<h2 className="
text-5xl
font-bold
text-white
mb-5
">


Featured Creative Work


</h2>



<p className="
text-gray-400
max-w-3xl
mx-auto
text-lg
">


Explore selected projects by HMM Graphics —
from event branding and ministry visuals
to digital campaigns and creative identity solutions.


</p>


</div>







{/* Categories */}


<div className="
flex
justify-center
flex-wrap
gap-4
mb-14
">


{

[
"All",
"Brand Identity",
"Church & Ministry",
"Events",
"Social Media",
"Motion Graphics"

].map((item,index)=>(


<button

key={index}

className="
px-5
py-2
rounded-full
border
border-cyan-400/40
text-white
hover:bg-cyan-400
hover:text-black
transition
"


>

{item}

</button>


))


}


</div>







{/* Projects */}


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
delay:index*0.2
}}


viewport={{
once:true
}}



className="
bg-slate-800
rounded-2xl
overflow-hidden
shadow-xl
border
border-white/5
hover:border-cyan-400
hover:-translate-y-3
transition
duration-300
"


>





<div className="overflow-hidden">


<img

src={project.image}

alt={project.title}

className="
w-full
h-72
object-cover
hover:scale-110
transition
duration-500
"

/>


</div>








<div className="p-6">


<span className="
text-cyan-400
text-sm
font-semibold
">


{project.category}


</span>





<h3 className="
text-white
text-2xl
font-bold
mt-3
">


{project.title}


</h3>





<p className="
text-gray-400
mt-3
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


Discuss Similar Project →


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