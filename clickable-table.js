// https://github.com/rootVIII/clickable-bootstrap-table

function clearStatus() {
    // TODO: iterate here and fade out status message before replacing with &thinsp;

    return new Promise((resolve) => {
        document.getElementById('statusMsg').innerHTML = '&thinsp;';
        resolve(null);
    });
}

function clearTable() {
    return new Promise((resolve) => {
        const tdBtns = document.getElementsByClassName('table-button');
        for (let tdBtn of tdBtns) {
            const btn = document.getElementById(tdBtn.id);
            const td = document.getElementById(`t${tdBtn.id.slice(1)}`);
            btn.style.color = '#212529';
            btn.style.backgroundColor = '#f8f9fa';
            td.style.backgroundColor = '#f8f9fa';
        }
        resolve(null);
    });
}

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
            clearTable().then(() => {
                clearStatus().catch((err) => {
                    console.log(err);
                });
            });
        } else if (event.target.id === 'submitBtn') {
            document.getElementById('statusMsg').innerHTML = 'Selected ...';
            setTimeout(() => {
                clearStatus().catch((err) => {
                    console.log(err);
                });
            }, 5000);
        }
    });
}

main();
