const WhatsIncluded = () => {
  return (
    <div className="w-full">
      <div className=" text-3xl">Whats Included</div>
      <div className="flex w-full justify-between mt-5">
        <div className="w-96 h-96 p-5 flex flex-col border-2 border-black rounded-lg">
          <div>Personalized Guidance</div>
          <div></div>
          <div className="text-wrap">
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
      </div>
    </div>
  );
};

export default WhatsIncluded;
