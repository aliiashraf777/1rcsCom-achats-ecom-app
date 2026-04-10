import styled from "styled-components"
import { FormGridWrapper, FormTitle } from "../../styles/form_grid";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";
import { FormElement, Input } from "../../styles/form";
import { BaseButtonBlack } from "../../styles/button";


const VerificationScreenWrapper = styled.section``;

const VerificationScreen = () => {
    return (
        <VerificationScreenWrapper>
            <FormGridWrapper>
                <Container>
                    <div className="form-grid-content">
                        <div className="form-grid-left">
                            <img src={staticImages.form_img4} alt="" className='object-fit-cover' />
                        </div>

                        <div className="form-grid-right">
                            <FormTitle>
                                <h3>Verification</h3>
                                <p>Verify your code.</p>
                            </FormTitle>

                            <form>
                                <FormElement>
                                    <label className='form-elem-label'>
                                        Verification Code
                                    </label>

                                    <Input
                                        type='text'
                                        placeholder=''
                                        name=''
                                        className='form-elem-control'
                                    />
                                </FormElement>

                                <BaseButtonBlack
                                    type='submit'
                                    className='form-submit-btn'
                                >
                                    Verify Code
                                </BaseButtonBlack>
                            </form>
                        </div>
                    </div>
                </Container>
            </FormGridWrapper>
        </VerificationScreenWrapper>
    )
}

export default VerificationScreen
