import { useRazorpay } from "react-razorpay";

const useCheckout = () => {
    const { Razorpay } = useRazorpay();

    const handlePayment = (product) => {
        const options = {
            key: "rzp_test_YOUR_KEY_HERE", // Replace with your actual key
            amount: product.price * 100, // Amount in paise
            currency: "INR",
            name: "klair3d",
            description: `Checkout for ${product.name}`,
            image: "https://klair3d.com/logo.png",
            handler: (res) => {
                console.log(res);
                alert("Payment Successful! Transaction ID: " + res.razorpay_payment_id);
            },
            prefill: {
                name: "Test User",
                email: "test@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Kerala, India",
            },
            theme: {
                color: "#FF4D4D",
            },
        };

        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", (response) => {
            console.log(response.error.code);
            console.log(response.error.description);
            alert("Payment Failed: " + response.error.description);
        });

        rzp1.open();
    };

    return { handlePayment };
};

export default useCheckout;
