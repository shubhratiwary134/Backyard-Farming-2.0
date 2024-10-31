const WhatsIncluded = () => {
  return (
    <div className="w-full">
      <div className=" text-5xl">Whats Included</div>
      <div className="flex w-full justify-between mt-5">
        <div className="w-96  px-5 py-10 flex flex-col border-2 border-black rounded-lg">
          <div>Personalized Guidance</div>
          <div></div>
          <div>
            Get weekly, tailored advice based on the specific plants you’re
            growing and your local climate. From planting tips to harvesting
            milestones, our roadmap is crafted to help you succeed at every step
          </div>
        </div>
        <div className="w-96 p-5 flex flex-col border-2 border-black rounded-lg">
          <div>Connect with Other Farmers</div>
          <div></div>
          <div>
            Join a community of backyard farmers who share your passion!
            Exchange tips, showcase your progress, and learn from fellow
            gardeners to make your journey more rewarding and fun.
          </div>
        </div>
        <div className="w-96 p-5 flex flex-col border-2 border-black rounded-lg">
          <div>Ask Questions</div>
          <div></div>
          <div>
            Need quick answers? Our integrated chatbot is here to help! Get
            real-time answers to common gardening questions, from planting
            advice to troubleshooting plant health issues
          </div>
        </div>
        <div className="w-96 p-5 flex flex-col border-2 border-black rounded-lg">
          <div>Get Help with Pests</div>
          <div></div>
          <div>
            Protect your plants from common pests with tailored tips and
            treatments. Access expert advice on safe and effective ways to
            manage pests without harming your garden.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsIncluded;