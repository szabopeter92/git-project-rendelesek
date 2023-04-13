const result = document.getElementById("result");

window.addEventListener("load", async () => {

    const response = await fetch("orders.json");
    const data = await response.json();

    console.log(data);

    let output = "";

    data.map(order => {

        output += `

            <div class='order'>
                <div>
                    <img src='${order.kep}' alt='${order.pizza}' />
                </div>
                <h3>${order.pizza}</h3>
                <hr>
                <h4>Ár: ${order.ar}</h4>
                <p>Extra: ${order.extra}</p>
                <p>Ital: ${order.ital}</p>
            </div>
        
        
        `;
    })

    result.innerHTML = output;

})