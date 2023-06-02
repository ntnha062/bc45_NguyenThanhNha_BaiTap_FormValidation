const stateDefault = {
    mangSinhVien: [{maSV: 1, hoTen: 'nguyen van a', soDienThoai: '09090909', email: 'acb@gmail.com'}]
}


export const QuanLySinhVienReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'THEM_SINH_VIEN':{
            const mangSVUpdate = [...state.mangSinhVien,action.sinhVien];
            state.mangSinhVien = mangSVUpdate;
            console.log(action)
            return{...state};
        };break;
        default: {
            return{...state};
        }
    }
} 