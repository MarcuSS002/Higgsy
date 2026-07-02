import { PromoCard } from "@/components/PromoCard";
import { Video } from "../components/Video";
import { FeatureCard } from "../components/FeatureCard";

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
                                title="Video 1"
                                videoUrl="https://cdn.higgsfield.ai/card/ab3ecfdf-43b1-40e9-9408-2d47ad640c36.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="Video 2"
                                videoUrl="https://cdn.higgsfield.ai/card/447168a3-3ac0-470c-bedc-2ab74f96ffd1.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="Video 3"
                                videoUrl="https://cdn.higgsfield.ai/card/b18c39ef-ecde-4633-97aa-130767bae4de.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="Video 4"
                                videoUrl="https://cdn.higgsfield.ai/card/371f85de-70cc-48bd-9226-73f69fedac57.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="Video 5"
                                videoUrl="https://cdn.higgsfield.ai/card/6b6ca0a2-5f23-47b7-a405-b5f4c1acbb65.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="Video 6"
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

    <div className="col-span-2 flex flex-col gap-6">
        <FeatureCard
            title="Propell AI Agent"
            description="Your autonomous AI agent that can perform tasks"

        />

        <FeatureCard
            title="Google Gemini"
            description="Your autonomous AI agent..."
            image="https://www.pngall.com/wp-content/uploads/16/Google-Gemini-Logo-PNG-Photos-thumb.png"
        />
        
    </div>
</div>
        </div>
    );
};