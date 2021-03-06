// https://github.com/rootVIII/clickable-bootstrap-table

function clearStatus() {
    document.getElementById('statusMsg').innerHTML = '&thinsp;';
}

function deselectCells(btnId = null) {
    return new Promise((resolve) => {
        const tdBtns = document.getElementsByClassName('table-button');
        for (let tdBtn of tdBtns) {
            if (btnId !== tdBtn.id && tdBtn.style.backgroundColor.length) {
                tdBtn.style.color = '#212529';
                tdBtn.style.backgroundColor = 'transparent';
            }
        }
        resolve(null);
    });
}

function selectCell(btnId) {
    return new Promise((resolve) => {
        const btn = document.getElementById(btnId);
        btn.style.setProperty('color', '#F8F9FA', 'important');
        btn.style.backgroundColor = '#188CFF';
        document.getElementById('statusMsg').innerHTML = btn.innerText.trim();
        resolve(btnId);
    });
}

function setSelection() {
    const statusMsg = document.getElementById('statusMsg');
    for (let tdBtn of document.getElementsByClassName('table-button')) {
        if (tdBtn.style.backgroundColor === 'rgb(24, 140, 255)') {
            statusMsg.innerHTML = `Selected ${tdBtn.innerText.trim()}`;
            break;
        }
    }
}

function main() {
    document.addEventListener('click', (event) => {
        if (event.target.className.includes('table-button')) {
            selectCell(event.target.id).then((btnId) => {
                deselectCells(btnId).catch((err) => console.log(err));
            });
        } else if (event.target.id === 'resetBtn') {
            deselectCells().catch((err) => console.log(err));
            clearStatus();
        } else if (event.target.id === 'submitBtn') {
            setSelection();
            setTimeout(() => {
                clearStatus();
            }, 4000);
        }
    });
}

main();
