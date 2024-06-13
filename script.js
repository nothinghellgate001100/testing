function showDetails(platform) {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('details').classList.remove('d-none');

    let content = '';

    if (platform === 'amazon') {
        content = `
            <h2>Amazon</h2>
            <p>Account Balance: 0 USDT</p>
            <p>Today's Times: 0</p>
            <p>Today's Commission: 0 USDT</p>
            <button class="btn btn-success" onclick="showOrderConfirmation()">Grab the order immediately</button>
            <p class="mt-3">Hint:</p>
            <ul>
                <li>5% of the amount of completed transactions earned.</li>
                <li>The system sends tasks randomly. Complete them as soon as possible after matching them, so as to avoid hanging all the time.</li>
            </ul>
        `;
    } else if (platform === 'alibaba') {
        content = `
            <h2>Alibaba</h2>
            <p>Account Balance: 0</p>
            <p>Today's Times: 0</p>
            <p>Today's Commission: 0</p>
            <button class="btn btn-success" onclick="showOrderConfirmation()">Grab the order immediately</button>
            <p class="mt-3">Hint:</p>
            <ul>
                <li>5% of the amount of completed transactions earned.</li>
                <li>The system sends tasks randomly. Complete them as soon as possible after matching them, so as to avoid hanging all the time.</li>
            </ul>
        `;
    } else if (platform === 'aliexpress') {
        content = `
            <h2>AliExpress</h2>
            <p>Account Balance: 0 USDT</p>
            <p>Today's Times: 0</p>
            <p>Today's Commission: 0 USDT</p>
            <button class="btn btn-success" onclick="showOrderConfirmation()">Grab the order immediately</button>
            <p class="mt-3">Hint:</p>
            <ul>
                <li>5% of the amount of completed transactions earned.</li>
                <li>The system sends tasks randomly. Complete them as soon as possible after matching them, so as to avoid hanging all the time.</li>
            </ul>
        `;
    }

    document.getElementById('details-content').innerHTML = content;
}

function showOrderConfirmation() {
    document.querySelector('.modal').style.display = 'block';
}

function hideDetails() {
    document.getElementById('menu').style.display = 'flex';
    document.getElementById('details').classList.add('d-none');
}
