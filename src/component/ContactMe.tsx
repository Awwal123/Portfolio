import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import emailjs from "emailjs-com";
// import { toast } from "react-toastify";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactMe = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending...");

    try {
      const result = await emailjs.send(
        "service_nnl8hx4", //  service ID
        "template_up7odp6", // template ID
        {
          from_email: formData.email,
          message: formData.message,
          to_name: "Recipient Name",
        },
        "qnl-k54SydUjXhe9m" // my emailjs public key
      );
      console.log(result.text);
      toast.success("Message sent successfully!");

      setFormData({ email: "", message: "" });
      setStatus(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      id="contact"
      className="h-auto md:min-h-screen overflow-hidden text-gray-600 dark:text-gray-300 flex flex-col w-full justify-start bg-white px-5 py-5 md:py-20  md:px-20 dark:bg-black"
    >
      <Fade direction="up" duration={3000} triggerOnce>
        <div className="flex justify-center flex-col gap-3 items-center w-full mb-5">
          <div className="w-[100px] text-center h-[28px] bg-gray-300 dark:bg-gray-500 rounded-xl text-gray-700 dark:text-gray-200">
            Get in touch
          </div>
          <p className="text-lg md:w-1/2 text-center">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
      </Fade>

      <form
        onSubmit={handleSubmit}
        className="flex mt-5 gap-5 flex-col justify-center items-center w-full"
      >
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          className="w-full md:w-[40%] h-[40px] p-5 border-black shadow-xl dark:bg-black border dark:border-gray-100 rounded-2xl"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          required
          className="w-full md:w-[40%] h-[180px] p-5 border-black shadow-xl dark:bg-black border dark:border-gray-100 rounded-2xl"
        />
        <button
          type="submit"
          className="w-full md:w-[40%] border-none bg-green-700 text-white p-2 rounded-2xl"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
      {status && (
        <div className="mt-5 text-center text-lg">
          <p className="hidden">{status}</p>
        </div>
      )
    }
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
      />

      
    </div>
  );
};
