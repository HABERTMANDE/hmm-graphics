import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";


export default function Hero() {


const whatsappLink =
"https://wa.me/254795155158?text=Hello%20HMM%20Graphics,%20I%20would%20like%20to%20start%20a%20project";



return (

<section

id="home"

className="
min-h-screen
bg-black
text-white
flex
items-center
px-8
md:px-20
overflow-hidden
relative
"


>



{/* MAIN CONTENT */}

<div className="max-w-6xl z-10">


<motion.div

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:0.8}}

>


<div className="
flex
items-center
gap-2
text-cyan-400
mb-5
">


<Sparkles size={20}/>

Creative Studio


</div>





<h1 className="
text-5xl
md:text-7xl
font-bold
leading-tight
">


HMM Graphics


<br/>


<span className="text-cyan-400">

Turning Ideas

</span>


<br/>


Into Powerful Designs


</h1>






<p className="
mt-8
text-gray-300
max-w-xl
text-lg
">


Professional branding, logos, posters,
social media graphics, event branding,
motion graphics and premium visual identity.


</p>







<a

href={whatsappLink}

target="_blank"

rel="noopener noreferrer"

>


<button

className="
mt-10
bg-cyan-400
text-black
px-7
py-3
rounded-full
font-semibold
flex
items-center
gap-2
hover:scale-105
transition
"


>


Start Your Project


<ArrowRight size={18}/>


</button>


</a>





</motion.div>


</div>









{/* FLOATING DESIGN AREA */}

<motion.div

initial={{opacity:0,x:100}}

animate={{opacity:1,x:0}}

transition={{duration:1}}


className="
hidden
lg:block
absolute
right-24
top-32
w-96
h-96
"


>



{/* ROTATING CIRCLE */}


<motion.div

animate={{

rotate:360

}}

transition={{

duration:15,

repeat:Infinity,

ease:"linear"

}}


className="
absolute
top-0
right-0
w-80
h-80
border
border-cyan-400/30
rounded-full
"


>

</motion.div>









{/* GLASS CARD */}


<motion.div


animate={{

y:[0,-15,0]

}}


transition={{

duration:4,

repeat:Infinity

}}



className="
absolute
right-0
bottom-0
bg-white/5
backdrop-blur-md
border
border-white/10
p-8
rounded-2xl
w-80
shadow-xl
"


>


<h3 className="
text-xl
font-bold
text-cyan-400
">


Creative Solutions


</h3>





<p className="
text-gray-300
mt-3
leading-relaxed
">


Brand Identity • Media Production
<br/>
Training • Event Design


</p>



</motion.div>







</motion.div>





</section>

)

}