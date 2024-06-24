import { Button } from "./Button"

const data = [{
    text: "React"
},
{
    text: "Next.js"
},
{
    text: "TypeScript"
},
{
    text: "Nest.js"
},
{
    text: "PostgreSQL"
},
{
    text: "Tailwindcss"
},
{
    text: "Figma"
},
{
    text: "Cypress"
},
{
    text: "Storybook"
},
{
    text: "Git"
},
]
export const WorkCard = (props) => {
    return (
        <div className={`flex drop-shadow-md rounded-[12px] drop-shadow-md ${props.reverse ? "flex-row-reverse" : ""} lg:flex-col shadow-xl`}>
            <div className="flex-1 bg-gray-100 rounded-[12px] p-[48px]">
                <img src={props.source} />
            </div>
            <div className="flex-1 flex flex-col gap-[24px] rounded-[12px] p-[48px] justify-center">
                <div>{props.title}</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</div>
                <div className="flex gap-[15px] flex-wrap">
                    {data.map((item) => (
                        <Button title={item.text} />
                    ))}
                </div>
                <img src="Sharebutton.png" className="w-[50px] h-[50px]" />
            </div>
        </div>
    )
}