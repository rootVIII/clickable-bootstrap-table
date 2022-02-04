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
        clearStatus().catch((err) => {
            console.log(err);
        });
        const tdBtns = document.getElementsByClassName('table-button');
        for (let tdBtn of tdBtns) {
            document.getElementById(tdBtn.id).style.backgroundColor = '#f8f9fa';
        }
        resolve(null);
    });
}

function selectCell() {
    return new Promise((resolve) => {
        console.log(event.target.parentElement.id);
        resolve(null);
    });
}

function main() {
    document.addEventListener('click', (event) => {
        if (event.target.className.includes('table-button')) {
            selectCell().catch((err) => {
                console.log(err);
            });
        } else if (event.target.id === 'resetBtn') {
            clearTable().catch((err) => {
                console.log(err);
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
