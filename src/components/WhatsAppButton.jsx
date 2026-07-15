import { MessageCircle } from "lucide-react";


function WhatsAppButton() {


const whatsappLink =
"https://wa.me/254795155158?text=Hello%20HMM%20Graphics,%20I%20would%20like%20to%20start%20a%20project";



return (

<a

href={whatsappLink}

target="_blank"

rel="noopener noreferrer"

className="
fixed
bottom-6
right-6
z-50
"


>


<div

className="
bg-green-500
text-white
w-16
h-16
rounded-full
flex
items-center
justify-center
shadow-xl
hover:scale-110
transition
duration-300
"


>


<MessageCircle size={32}/>


</div>


</a>


);

}


export default WhatsAppButton;