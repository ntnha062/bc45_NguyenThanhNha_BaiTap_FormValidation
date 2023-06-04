const stateDefault = {
    mangSinhVien: [{maSV: 1, hoTen: 'nguyen van a', soDienThoai: '09090909', email: 'acb@gmail.com'}]
}



export const QuanLySinhVienReducer = (state = stateDefault, action) => {

    switch(action.type){
        case 'THEM_SINH_VIEN':{

            //clone state
            let newState = {...state};
            let mangSVUpdate =  [...newState.mangSinhVien];
            const sinhVien = {...action.sinhVien};
            mangSVUpdate.push(sinhVien);

            //Update state
            newState.mangSinhVien = mangSVUpdate;

            return newState;
        };break;

        default: {
            return {...state};
        };break;
    }

} 