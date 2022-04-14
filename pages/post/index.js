import dynamic from "next/dynamic";
import Link from "next/link";
const HeadImage = dynamic(() => import("../../components/HeadImage"));

const Index = () => {
  return (
    <>
      <HeadImage title="Our Blog" currentPath="post" />
      <section className="ftco-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-4 d-flex ">
              <div className="blog-entry align-self-stretch">
                <Link href="/post/1">
                  <a
                    className="block-20"
                    style={{
                      backgroundImage: 'url("/assets/images/image_1.jpg")',
                    }}
                  ></a>
                </Link>
                <div className="text py-4 d-block">
                  <div className="meta">
                    <div>
                      <a href="#">Sept 10, 2022</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                  </div>
                  <h3 className="heading mt-2">
                    <Link href="/post/1">
                      <a>The Delicious Pizza</a>
                    </Link>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ">
              <div className="blog-entry align-self-stretch">
                <Link href="/post/2">
                  <a
                    className="block-20"
                    style={{
                      backgroundImage: 'url("/assets/images/image_2.jpg")',
                    }}
                  ></a>
                </Link>
                <div className="text py-4 d-block">
                  <div className="meta">
                    <div>
                      <a href="#">Sept 10, 2022</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                  </div>
                  <h3 className="heading mt-2">
                    <Link href="/post/2">
                      <a>The Delicious Pizza</a>
                    </Link>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ">
              <div className="blog-entry align-self-stretch">
                <Link href="/post/3">
                  <a
                    className="block-20"
                    style={{
                      backgroundImage: 'url("/assets/images/image_3.jpg")',
                    }}
                  ></a>
                </Link>
                <div className="text py-4 d-block">
                  <div className="meta">
                    <div>
                      <a href="#">Sept 10, 2022</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                  </div>
                  <h3 className="heading mt-2">
                    <Link href="/post/3">
                      <a>The Delicious Pizza</a>
                    </Link>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
