import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./Pagination.module.css";

const Pagination = (props) => {
    const { currentPages, numPages, basePath = "/" } = props;

    const prevPath = currentPages === 2 ? basePath : `${basePath}page/${currentPages - 1}`;

    return (
        <div>
            <div className={styles.next_previous_box}>

                <div>
                    {currentPages > 1 && <Link to={prevPath}>前のページへ</Link>}
                </div>
                <div>
                    {currentPages !== numPages && (
                        <Link to={`${basePath}page/${currentPages + 1}`}>次のページへ</Link>
                    )}
                </div>

            </div>
        </div>
    );

};

export default Pagination;