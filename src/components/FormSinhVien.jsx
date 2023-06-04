import React, { Component } from 'react'
import { connect } from 'react-redux';


class FormSinhVien extends Component {

    state = {
        values:{
            maSV: '',
            hoTen: '',
            email:'',
            soDienThoai:''
        },
        errors:{
            maSV: '',
            hoTen: '',
            email:'',
            soDienThoai:''
        },
        valid:false
    }

    

    handleChange = (e) => {
        let tagInput = e.target;
        let {name,value,type,pattern} = tagInput;
        
        let errorMessage = '';

        if(value.trim() === '')
        {
            errorMessage = name + 'Không được bỏ trống!'
        }
debugger
        //kiem tra email
        if(type === 'email'){
            const regex = new RegExp(pattern);
            if(regex.test(value)){
                errorMessage = name + 'Không đúng định dạng!'
            }
        }

        if(name === 'soDienThoai'){
            const regex = new RegExp(pattern);
            if(!regex.test(value)){
                errorMessage = name + ' không đúng định dạng'
            }
        }

        let values = {...this.state.values, [name]: value};
        let errors = {...this.state.error, [name]:errorMessage};

        this.setState({
            ...this.state,
            values: values,
            errors: errors
        }, () => {
            console.log(this.state);
            this.checkValid()
        } )

    }


    handleSubmit = (e) => {
        e.preventDefault();

        this.props.themSinhVien(this.state.values)
    }

    checkValid = () => {
        let valid = true;
        for(let key in this.state.errors){
            if(this.state.errors[key] !== '' || this.state.values[key] === ''){
                valid = false;
            }
        }
        // if(valid){
        //     let flag = false;
        //     for(let key in this.state.value){
        //         if(this.state.errors[key] !== ''){
        //             flag = false
        //         }
        //     }
        //     if(!flag){
        //         valid = false;
        //     }
        // }
        this.setState({
            ...this.state,
            valid:valid
        })
    }

  render() {
    return (
      <div className='conatainer'>
        <div className='card text-left'>
            <div className='card-header bg-dark text-white'>Thông tin sinh viên</div>
            <div className='card-body'>
                <form onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <div className='form-group col-6 pt-3'>
                            <span>Mã SV</span>
                            <input className='form-control'name='maSV' value={this.state.values.maSV} onChange={this.handleChange}/>
                            <p className='text-danger'>{this.state.errors.maSV}</p>
                        </div>

                        <div className='form-group col-6 pt-3'>
                            <span>Họ Tên</span>
                            <input className='form-control'name='hoTen' value={this.state.values.hoTen} onChange={this.handleChange}/>
                            <p className='text-danger'>{this.state.errors.hoTen}</p>
                        </div>

                        <div className='form-group col-6 pt-3'>
                            <span>Email</span>
                            <input type="email" className='form-control' name='email' pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/' value={this.state.values.email} onChange={this.handleChange}/>
                            <p className='text-danger'>{this.state.errors.email}</p>
                        </div>

                        <div className='form-group col-6 pt-3'>
                            <span>Số điện thoại</span>
                            <input className='form-control' type='text' name='soDienThoai' pattern='^(0|[1-9][0-9]*)$' value={this.state.values.soDienThoai} onChange={this.handleChange}/>
                            <p className='text-danger'>
                                {this.state.errors.soDienThoai}
                            </p>
                        </div>
                    </div>

                    <div className='row pt-5'>
                        <div className='col-md-12 text-right'>
                            {this.state.valid ? <button className='btn btn-sucesss' type='submit'>Thêm sinh viên</button> : <button className='btn btn-sucesss' type='submit' disabled>Thêm sinh viên</button>}
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        themSinhVien: (sinhVien) => {



            const action = {
                type: 'THEM_SINH_VIEN',
                sinhVien
            }
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps) (FormSinhVien)