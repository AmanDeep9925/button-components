import React from "react";
import Button from "./Button";
import "./button.css";

function ButtonsWrapper() {
    return (
        <div className="buttonsWrapper">
            <h1 className="heading">Buttons</h1>
            <div className="container">
                <div className="item">
                    <div className="code">
                        {"< "}Button {"/>"}
                    </div>
                    <Button>Default</Button>
                </div>
                <div className="item">
                    <div className="code pseudoClass">&:hover, &:focus</div>
                    <Button>Default</Button>
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <div className="code">
                        {"< "}Button variant="outline" {"/>"}
                    </div>
                    <Button variant="outline" color="#3d5afe">
                        Default
                    </Button>
                </div>
                <div className="item">
                    <div className="code pseudoClass">&:hover, &:focus</div>
                    <Button variant="outline" color="#3d5afe">
                        Default
                    </Button>
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <div className="code">
                        {"< "}Button variant="text"{"/>"}
                    </div>
                    <Button variant="text" color="#3d5afe" disableShadow="yes">
                        Default
                    </Button>
                </div>
                <div className="item">
                    <div className="code pseudoClass">&:hover, &:focus</div>
                    <Button variant="text" color="#3d5afe" disableShadow="yes">
                        Default
                    </Button>
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <div className="code">
                        {"< "}Button disableShadow{"/>"}
                    </div>
                    <Button disableShadow="yes" color="#3d5afe">
                        Default
                    </Button>
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <div className="code">
                        {"< "}Button disabled{"/>"}
                    </div>
                    <Button disabled>Default</Button>
                </div>

                <div className="item">
                    <div className="code">
                        {"< "}Button variant=”text” disabled {"/>"}
                    </div>
                    <Button variant="text" disableShadow="yes" disabled>
                        Default
                    </Button>
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <div className="code">
                        {"< "}Button startIcon=”local_grocery_store” {"/>"}
                    </div>
                    <Button color="#3d5afe" startIcon="add_shopping_cart">
                        Default
                    </Button>
                </div>

                <div className="item">
                    <div className="code">
                        {"< "}Button endIcon=”local_grocery_store”{"/>"}
                    </div>
                    <Button color="#3d5afe" endIcon="add_shopping_cart">
                        Default
                    </Button>
                </div>
            </div>

            <div className="container width">
                <div className="item">
                    <div className="code">
                        {"< "}Button size=”sm” {"/>"}
                    </div>
                    <Button size="sm" color="#3d5afe">
                        Default
                    </Button>
                </div>

                <div className="item">
                    <div className="code">
                        {"< "}Button size="md"{"/>"}
                    </div>
                    <Button size="md" color="#3d5afe">
                        Default
                    </Button>
                </div>

                <div className="item">
                    <div className="code">
                        {"< "}Button size="lg"{"/>"}
                    </div>
                    <Button size="lg" color="#3d5afe">
                        Default
                    </Button>
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <div className="code">
                        {"< "}Button color=”default”{"/>"}
                    </div>
                    <Button color="#e0e0e0">Default</Button>
                </div>

                <div className="item">
                    <div className="code">
                        {"< "}Button color="primary"{"/>"}
                    </div>
                    <Button color="#3d5afe">Default</Button>
                </div>

                <div className="item">
                    <div className="code">
                        {"< "}Button color="secondary"{"/>"}
                    </div>
                    <Button color="#455a64">Default</Button>
                </div>

                <div className="item">
                    <div className="code">
                        {"< "}Button color="danger"{"/>"}
                    </div>
                    <Button color="#d32f2f">Default</Button>
                </div>
            </div>
        </div>
    );
}

export default ButtonsWrapper;
