import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex justify-center m-8">
        <div className="w-6/12 sm:w-4/12 px-4 h-[80%] text-center">
          <p>
            I am a smart, hungry and humble Full Stack Developer. I have been
            programming since middle school and have a passion for finding
            efficient and fiscally minded solutions for all digital products.
            <img
              src="https://user-images.githubusercontent.com/73684895/194989310-e5b4fc46-f905-4413-870a-e4afcc57c921.jpg"
              alt="Jared Mumaw"
              className="shadow rounded-full max-w-full h-auto border-none m-4"
            />{" "}
            I am a constant learner and hungry to take the initiative and
            partner with like minded people! I am proficient in JavaScript, and
            Ruby and can easily pick up other languages and tools like Git, Vue,
            Yarn, and Django to name a few.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
