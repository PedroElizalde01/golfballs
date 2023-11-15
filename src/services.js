import axios from "axios";

const url = "http://18.209.28.198:8080"

const golfService = {
    getStock: async (props) => { 
      const res = await axios.get(`${url}/stock`);
      console.log(res)
    },
    setStock: async (props) => { 
        const res = await axios.post(`${url}/stock`, {amount: props.amount});
        console.log(res)
    },
    getSells: async (props) => { 
        const res = await axios.get(`${url}/sells`);
        console.log(res)
    },
    buy: async (props) => { 
        const res = await axios.post(`${url}/order`, {amount: props.amount});
        console.log(res)
    },
  };
  
  const UseGolfService = () => golfService;
  
  export { UseGolfService };
  