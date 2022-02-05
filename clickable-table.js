// https://github.com/rootVIII/clickable-bootstrap-table

function selectCell(btnId) {
    return new Promise((resolve) => {
        const td = document.getElementById(`t${btnId.slice(1)}`);
        const btn = document.getElementById(btnId);
        btn.style.setProperty('color', '#f8f9fa', 'important');
        btn.style.backgroundColor = '#188CFF';
        td.style.backgroundColor = '#188CFF';
        document.getElementById('statusMsg').innerHTML = btn.innerText.trim();
        resolve(null);
    });
}

function main() {
    document.addEventListener('click', (event) => {
        if (event.target.className.includes('table-button')) {
            selectCell(event.target.id).catch((err) => {
                console.log(err);
            });
        } else if (event.target.id === 'resetBtn') {
            window.location.reload();
        } else if (event.target.id === 'submitBtn') {
            document.getElementById('statusMsg').innerHTML = 'Selected ...';
            setTimeout(() => {
                document.getElementById('statusMsg').innerHTML = '&thinsp;';
            }, 5000);
        }
    });
}

main();
