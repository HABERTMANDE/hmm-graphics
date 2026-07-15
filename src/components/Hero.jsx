import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Palette, Layers, PenTool } from "lucide-react";


export default function Hero() {


const whatsappLink =
"https://wa.me/254795155158?text=Hello%20HMM%20Graphics,%20I%20would%20like%20to%20start%20a%20project";


return (

<section

id="home"

className="
min-h-[85vh]
lg:min-h-screen
bg-neutral-950
text-white
flex
items-center
relative
overflow-hidden
px-6
md:px-20
"


>


{/* BACKGROUND GLOW */}

<div className="
absolute
right-[-150px]
top-20
w-[500px]
h-[500px]
bg-cyan-400/20
blur-[140px]
rounded-full
">
</div>



<div className="
absolute
left-[-150px]
bottom-0
w-[350px]
h-[350px]
bg-cyan-400/10
blur-[120px]
rounded-full
">
</div>







{/* MAIN CONTENT */}

<div className="
max-w-7xl
w-full
z-10
grid
lg:grid-cols-2
gap-10
items-center
">



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
uppercase
tracking-widest
text-sm
mb-6
">


<Sparkles size={18}/>

Creative Design Studio


</div>






<h1 className="
text-5xl
sm:text-6xl
lg:text-8xl
font-extrabold
leading-[0.95]
tracking-tight
">


We Build


<br/>


<span className="text-cyan-400">

Brands

</span>


<br/>


That Speak


</h1>






<p className="
mt-8
text-gray-300
max-w-xl
text-lg
leading-relaxed
">


HMM Graphics creates powerful visual identities,
digital experiences and creative solutions that help
brands, businesses and organizations stand out.


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
px-8
py-4
rounded-full
font-bold
flex
items-center
gap-3
hover:scale-105
transition
"


>


Start Your Project


<ArrowRight size={20}/>


</button>


</a>







<div className="
mt-10
flex
gap-4
text-gray-400
text-sm
">


<Palette size={18} className="text-cyan-400"/>

Branding


<PenTool size={18} className="text-cyan-400"/>

Design


<Layers size={18} className="text-cyan-400"/>

Media


</div>






</motion.div>









{/* CREATIVE VISUAL SIDE */}


<motion.div

initial={{opacity:0,x:80}}

animate={{opacity:1,x:0}}

transition={{duration:1}}

className="
relative
hidden
lg:block
h-[500px]
"

>



{/* MAIN GLASS CARD */}


<motion.div

animate={{

y:[0,-20,0]

}}

transition={{

duration:5,

repeat:Infinity

}}

className="
absolute
right-10
top-20
w-96
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
shadow-2xl
"


>


<div className="
h-56
rounded-2xl
bg-gradient-to-br
from-cyan-400/30
to-transparent
flex
items-center
justify-center
">


<h2 className="
text-5xl
font-bold
">

HMM

</h2>


</div>




<h3 className="
text-2xl
font-bold
mt-6
">


Creative Solutions


</h3>



<p className="
text-gray-400
mt-3
">


Brand Identity • Motion Graphics
<br/>
Digital Media • Training


</p>



</motion.div>








{/* FLOATING TAG */}

<motion.div

animate={{

rotate:360

}}

transition={{

duration:20,

repeat:Infinity,

ease:"linear"

}}

className="
absolute
right-0
bottom-20
w-28
h-28
rounded-full
border
border-cyan-400/40
flex
items-center
justify-center
text-xs
text-cyan-400
"


>


Creative


<br/>

Studio


</motion.div>






</motion.div>






</div>



</section>

)

}