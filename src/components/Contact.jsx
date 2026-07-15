import { motion } from "framer-motion";
import { MessageCircle, Send, Mail, Phone, MapPin } from "lucide-react";


function Contact() {


const whatsappLink =
"https://wa.me/254795155158?text=Hello%20HMM%20Graphics,%20I%20would%20like%20to%20start%20a%20project";


const telegramLink =
"https://t.me/pioneersschool";



return (

<section
id="contact"
className="bg-slate-900 text-white py-24 px-8"
>


<div className="max-w-7xl mx-auto">


<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.8}}

viewport={{once:true}}

>




<div className="text-center mb-16">


<h2 className="text-5xl font-bold text-cyan-400 mb-6">

Let's Create Something Powerful

</h2>


<p className="text-xl text-gray-300 max-w-3xl mx-auto">

Ready to transform your ideas into powerful visual experiences?

Partner with HMM Graphics for branding, design,
media and creative solutions.

</p>


</div>







<div className="grid md:grid-cols-2 gap-12">





{/* Contact Information */}


<div className="
bg-slate-800
rounded-2xl
p-8
shadow-lg
border
border-cyan-400/20
">


<h3 className="text-3xl font-bold text-cyan-400 mb-8">

Start Your Journey

</h3>





<div className="space-y-6">





<div className="flex gap-4 items-center">

<Phone className="text-cyan-400"/>

<div>

<h4 className="font-bold">
Phone
</h4>

<p className="text-gray-400">
+254 795 155 158
</p>

</div>

</div>





<div className="flex gap-4 items-center">

<Mail className="text-cyan-400"/>

<div>

<h4 className="font-bold">
Email
</h4>

<p className="text-gray-400">
hmm.kazini@gmail.com
</p>

</div>

</div>





<div className="flex gap-4 items-center">

<MapPin className="text-cyan-400"/>

<div>

<h4 className="font-bold">
Location
</h4>

<p className="text-gray-400">
Nairobi, Kenya
</p>

</div>

</div>





</div>









{/* Main Actions */}


<div className="flex flex-wrap gap-4 mt-10">





<a

href={whatsappLink}

target="_blank"

rel="noopener noreferrer"

>


<button

className="
bg-green-500
px-6
py-3
rounded-full
flex
items-center
gap-2
font-semibold
hover:scale-105
transition
"


>


<MessageCircle size={20}/>

Start Your Project


</button>


</a>








<a

href={telegramLink}

target="_blank"

rel="noopener noreferrer"

>


<button

className="
border
border-cyan-400
px-6
py-3
rounded-full
flex
items-center
gap-2
hover:bg-cyan-400
hover:text-black
transition
"


>


<Send size={20}/>

Join Design Academy


</button>


</a>





</div>





</div>









{/* Why Choose HMM */}



<div className="
bg-slate-800
rounded-2xl
p-8
shadow-lg
border
border-cyan-400/20
">



<h3 className="text-3xl font-bold text-cyan-400 mb-8">

Why Choose HMM Graphics?

</h3>




<ul className="space-y-5 text-gray-300 text-lg">


<li>
✓ Premium and modern designs
</li>


<li>
✓ Creative concepts built around your vision
</li>


<li>
✓ Professional branding solutions
</li>


<li>
✓ Event and ministry design experience
</li>


<li>
✓ Media production and digital creativity
</li>


<li>
✓ Training the next generation of designers
</li>


</ul>






<div className="mt-10 p-5 bg-black rounded-xl">


<h4 className="text-cyan-400 font-bold text-xl">

HMM Creative Studio

</h4>


<p className="text-gray-400 mt-2">

Design • Branding • Media • Training

</p>


</div>




</div>






</div>





</motion.div>


</div>


</section>


);

}


export default Contact;