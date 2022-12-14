// import React from 'react'

//  const Login = () => {
//   return (
//     <>
//     <div>Login</div>
//     <div className="container">
//     <TitleComponent title="React CRUD Login "></TitleComponent>
//     <div className="card card-login mx-auto mt-5">
//         <div className="card-header">Login</div>
//         <div className="text-center">
//             <span>IP : <b>{this.state.location.ip}</b></span>, &nbsp;
//             <span>Country : <b>{this.state.location.country_name}</b></span>, &nbsp;
//             <span>Region : <b>{this.state.location.region_name}</b></span>, &nbsp;
//             <span>City : <b>{this.state.location.city}</b></span>, &nbsp;
//             <span>PIN : <b>{this.state.location.zip_code}</b></span>, &nbsp;
//             <span>Zone : <b>{this.state.location.time_zone}</b></span>
//         </div>
//         <div className="card-body">
//             <form onSubmit={this.handleSubmit}>
//                 <div className="form-group">
//                     <div className="form-label-group">
//                         <input className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputEmail" placeholder="Email address" type="text" name="email" onChange={this.handleEmailChange} autoFocus required/>
//                         <label htmlFor="inputEmail">Email address</label>
//                         <div className="invalid-feedback">
//                             Please provide a valid Email.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <div className="form-label-group">
//                         <input type="password" className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputPassword" placeholder="******" name="password" onChange={this.handlePwdChange} required/>
//                         <label htmlFor="inputPassword">Password</label>
//                         <div className="invalid-feedback">
//                             Please provide a valid Password.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <div className="checkbox">
//                         <label>
//                             <input type="checkbox" value="remember-me"/>Remember Password
//                         </label>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Login &nbsp;&nbsp;&nbsp;
//                         {isLoading ? (
//                             <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                         ) : (
//                             <span></span>
//                         )}
//                     </button>
//                 </div>
//                 <div className="form-group">
//                     <div className="form-group">
//                         <b>email:</b> gowthaman.nkl1@gmail.com
//                     </div>
//                     <div className="form-group">
//                         <b>password :</b> password
//                     </div>
//                 </div>
//             </form>
//             <div className="text-center">
//                 <Link className="d-block small mt-3" to={'register'}>Register an Account</Link>
//                 <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
//             </div>
//         </div>
//     </div>
//     {this.renderRedirect()}
// </div></>
//   )
// }
// export default Login;