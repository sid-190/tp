import './FeedbackPage.scss';
import { useNavigate } from "react-router-dom";

const FeedbackPage = () => {
    const navigate = useNavigate();

    const submit = () => {
        navigate(`/HomePage`)
    }
    return(
    <div class="container">
    <div class="apply_box">
        <h1>Tell us, What you think about us? </h1>
        <form action="">
            <div class="form_container">
                <div class="form_control">
                    <label for="first_name">First Name</label>
                    <input id="first_name" name="first_name" placeholder="Enter First Name" />
                </div>
                <div class="form_control">
                    <label for="last_name">Last Name</label>
                    <input id="last_name" name="last_name" placeholder="Enter Last Name" />
                </div>
                <div class="form_control">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter Email" />
                </div>
                <div class="form_control">
                    <label for="job_role">Ratings</label>
                    <select id="job_role" name="job_role">
                        <option value="">Select Rating</option>
                        <option value="frontend">Excellent</option>
                        <option value="backend">Very Good</option>
                        <option value="full_stack">Good</option>
                        <option value="ui/ux">Unsatisfactory</option>
                    </select>
                </div>
                <div class="textarea_control">
                    <label for="address"> Feedback </label>
                     <textarea name="address" id="address" cols="50" rows="4" placeholder="Enter Feedback"></textarea>
                </div>
                <div class="form_control">
                    <label for="city">City</label>
                    <input id="city" name="city" placeholder="Enter City" />
                </div>
                <div class="form_control">
                    <label for="pincode">Pincode</label>
                    <input type="number" id="pincode" name="pincode" placeholder="Enter Pincode" />
                </div>
            </div> <br/>
            <div class="button_container">
                <button className='fbutton' type="submit" onClick={submit}>Submit</button>
            </div>
        </form>
    </div>
</div>
);
}


export default FeedbackPage;