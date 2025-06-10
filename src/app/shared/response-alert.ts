import Swal from 'sweetalert2';
export function successAlert(text: any): void {
    Swal.fire({
        position: 'center',
        icon: 'success',
        width: 500,
        title: `<p style="font-size: 1em;">${text}</p>`,
        showConfirmButton: false,
        timer: 2500,
        customClass: {
            icon: 'custom-icon-size',
        },
    });
}

export function wrongAlert(text: any): void {
    Swal.fire({
        position: 'center',
        icon: 'error',
        width: 500,
        title: `<p style="font-size: 1em;">${text}</p>`,
        showConfirmButton: false,
        timer: 2500,
        customClass: {
            icon: 'custom-icon-size',
        },
    });
}
