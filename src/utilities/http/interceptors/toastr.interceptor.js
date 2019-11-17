import toastr from 'toastr';
const toastrInterceptor = response => {
    if (response.data && response.status == 200) {
        toastr.success('Data loaded successfully');
    } else {
        toastr.error('ERROR: something worng happend');
    }
    return response;
}

export default toastrInterceptor;