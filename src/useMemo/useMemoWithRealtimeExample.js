import React, { useEffect, useMemo, useState } from "react";

const UseMemoWithRealtimeExample = () => {
  console.log("1");
  let count = 1;
  const [search, setSearch] = useState("");
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());
  const [products, setProducts] = useState([
    { id: 101, name: "one plus", price: 10000 },
    {
      id: 102,
      name: "oppo",
      price: 10200,
    },
    { id: 103, name: "poko", price: 13000 },
    ,
    { id: 104, name: "Nokia", price: 13400 },
    ,
    { id: 105, name: "RedMi", price: 13400 },
  ]);

  const filteredProducts = useMemo(() => {
    console.log("here inside");

    let res = products.filter((eachitem) => {
      return eachitem.name.toLowerCase().includes(search);
    });
    return res;
  }, [products, search]);

  useEffect(() => {
    let stopinterval = setInterval(() => {
      count++;
      setTimer(new Date().toLocaleTimeString());
      if (count == 20) {
        clearInterval(stopinterval);
      }
    }, 1000);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="seach here"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div>
        <div>{timer}</div>
        {filteredProducts.map((eachobj) => {
          return (
            <div key={eachobj.id}>
              <h1>
                {eachobj.name} {eachobj.id} {eachobj.price}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseMemoWithRealtimeExample;
