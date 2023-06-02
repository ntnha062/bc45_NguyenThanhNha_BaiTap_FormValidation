import React, { Component } from 'react'
import { render } from 'react-dom';
import { connect } from 'react-redux'

class TableSinhVien extends Component {

    

    renderSinhVien = () => {
        const { mangSinhVien } = this.props;
        return mangSinhVien.map((sinhVien, index) => {
            return (
                <tr key={index}>
                    <td>{sinhVien.maSV}</td>
                    <td>{sinhVien.hoTen}</td>
                    <td>{sinhVien.soDienThoai}</td>
                    <td>{sinhVien.email}</td>
                </tr>
            )
        })
    }

    render() {
        console.log(this.props.mangSinhVien)
        return (
            <div className='container'>
                <div class="table-responsive pt-5">
                    <table class="table">
                        <thead>
                            <tr>
                                <th >Mã SV </th>
                                <th >Họ Tên</th>
                                <th >Số điện thoại</th>
                                <th >Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <this.renderSinhVien/>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}


export default connect(mapStateToProps, null)(TableSinhVien)