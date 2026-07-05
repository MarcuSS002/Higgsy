import { PromoCard } from "@/components/PromoCard";
import { Video } from "../components/Video";
import { FeatureCard } from "../components/FeatureCard";
import { Footer } from "@/components/Footer";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "../components/ui/carousel";

export const Landing = () => {
    return (
        <div className="bg-black min-h-screen py-10">

            {/* Video Carousel */}
            <div className="flex justify-center">
                <Carousel
                    className="w-full px-8"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="GEMINI OMNI FLASH"
                                videoUrl="https://cdn.higgsfield.ai/card/ab3ecfdf-43b1-40e9-9408-2d47ad640c36.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="HIGGSFIELD SHORT STUDIO"
                                videoUrl="https://cdn.higgsfield.ai/card/447168a3-3ac0-470c-bedc-2ab74f96ffd1.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="HIGGSFIELD EXPLAINER"
                                videoUrl="https://cdn.higgsfield.ai/card/b18c39ef-ecde-4633-97aa-130767bae4de.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="NANO 2 BANANA LITE"
                                videoUrl="https://cdn.higgsfield.ai/card/371f85de-70cc-48bd-9226-73f69fedac57.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="SEDANCE 2.0 IN NATIVE 4K"
                                videoUrl="https://cdn.higgsfield.ai/card/6b6ca0a2-5f23-47b7-a405-b5f4c1acbb65.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="THE TRAILER IS HERE WITH TRAVELLER"
                                videoUrl="https://cdn.higgsfield.ai/card/371f85de-70cc-48bd-9226-73f69fedac57.mp4"
                            />
                        </CarouselItem>
                    </CarouselContent>

                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </div>


            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-4">
                    <PromoCard />
                </div>

                <div className="m-3.5 col-span-2 flex flex-col gap-2">
                    <FeatureCard
                        title="Create with Pollinations AI ✨"
                        description="Your autonomous AI agent that turns ideas into action and gets tasks done for you."

                    />

                    <FeatureCard
                        
                        title="Google Gemini"
                        description="AI Companion that can generate images, videos, and 3D models from text prompts."
                        image="https://static.vecteezy.com/system/resources/previews/070/779/929/non_2x/google-gemini-app-icon-on-a-transparent-background-free-png.png"
                    />

                </div>
                
            </div>
            <Footer />
        </div>
    );
};