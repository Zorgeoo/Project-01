import { Button } from "./Button"
export const SecondSection = () => {
    return (
        <div className="bg-gray-50 h-screen border ">
            <div className="flex flex-col items-center py-[96px] px-[80px] w-[70%] m-auto">
                <Button title="About me" desc="dadasda" />
                <div className="flex h-[1000px] px-[32px] py-[50px] sm:flex-col gap-[48px]">
                    <div className="flex-1 flex border justify-start w-[520px] h-[520px]">
                        <img src="Tom02.png" className=" w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col justify-evenly border">
                        <div className="text-[30px]">Curious about me? Here you have it:</div>
                        <div>I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.</div>
                        <div>Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.</div>
                        <div>With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub.</div>
                        <div>Finally, some quick bits about me.</div>
                        <ul className="flex list-disc pl-[15px] flex-wrap">
                            <li className="w-[400px]">B.E. in Computer Engineering</li>
                            <li className="w-[400px]">Avid learner</li>
                            <li className="w-[400px]">Fulltime freelancer</li>
                        </ul>
                        <div>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</div>
                    </div>
                </div>
            </div>
        </div >
    )
}