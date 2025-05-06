import React from "react";

function Testimonials() {
  return (
    <section class="bg-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm">
          <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-gray-900">
            Testimonials
          </h2>
          <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div class="grid mb-8 lg:mb-12 lg:grid-cols-2 border border-gray-200">
          {[1, 2, 3, 4].map(() => (
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 md:p-12 border border-gray-200">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 class="text-lg font-semibold text-gray-900">
                  Speechless with how easy this was to integrate
                </h3>
                <p class="my-4">
                  "I recently got my hands on Flowbite Pro, and holy crap, I'm
                  speechless with how easy this was to integrate within my
                  application. Most templates are a pain, code is scattered, and
                  near impossible to theme."
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div class="space-y-0.5 font-medium text-left">
                  <div>Bonnie Green</div>
                  <div class="text-sm font-light text-gray-500">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
