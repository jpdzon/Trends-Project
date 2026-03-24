document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("trends-container");

    fetch("/api/trends")
        .then(res => res.json())
        .then(data => {
            container.innerHTML = "";
            data.forEach(trend => {
                const card = document.createElement("div");
                card.className = "trend-card";
                card.innerHTML = `
                    <div class="trend-name">${trend.name}</div>
                    <div class="trend-bar-wrap">
                        <div class="trend-bar" data-growth="${trend.growth}"></div>
                    </div>
                    <div class="trend-growth">Growth index: ${trend.growth}%</div>
                `;
                container.appendChild(card);
            });

            requestAnimationFrame(() => {
                document.querySelectorAll(".trend-bar").forEach(bar => {
                    bar.style.width = bar.dataset.growth + "%";
                });
            });
        })
        .catch(() => {
            container.innerHTML = "<p class='loading'>Failed to load trends. Please refresh.</p>";
        });
});
