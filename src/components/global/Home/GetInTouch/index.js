export default function GetInTouch() {
  return (
    <section className="py-10 flex md:flex-row flex-col w-full justify-center items-center bg-orange-600">
      <div className="flex flex-col justify-start w-full md:w-1/2 md:p-0 p-5">
        <h3 className="text-white md:text-3xl text-2xl font-bold">Get In Touch</h3>
        <h4 className="text-white md:text-5xl text-4xl mt-2">We would love <br/> to hear from you!</h4>
        <p className="text-white mt-4 text-2xl">{"Fill out this form and we'll reach out to you shortly."}</p>
      </div>
      <form className="flex flex-col gap-4 w-full md:w-1/4 md:p-0 p-5">
          <input
            type="text"
            placeholder="Your Name"
            className="border placeholder:text-gray-100 border-white p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border placeholder:text-gray-100 border-white p-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="border placeholder:text-gray-100 border-white p-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black p-2 rounded hover:bg-gray-100 transition duration-200"
          >
            Submit
          </button>
      </form>
    </section>
  );
}
