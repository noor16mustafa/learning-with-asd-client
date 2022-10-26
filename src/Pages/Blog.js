import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <div className='bg-emerald-500'>
                    <h1 className='text-3xl font-bold text-black p-4 text-center'>What is Cors?</h1>
                </div>
                <div className='bg-emerald-300 p-4'>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                        The Cross-Origin Resource Sharing standard works by adding new HTTP headers that let servers describe which origins are permitted to read that information from a web browser. Additionally, for HTTP request methods that can cause side-effects on server data (in particular, HTTP methods other than GET, or POST with certain MIME types), the specification mandates that browsers "preflight" the request, soliciting supported methods from the server with the HTTP OPTIONS request method, and then, upon "approval" from the server, sending the actual request. Servers can also inform clients whether "credentials" (such as Cookies and HTTP Authentication) should be sent with requests.

                        CORS failures result in errors but for security reasons, specifics about the error are not available to JavaScript. All the code knows is that an error occurred. The only way to determine what specifically went wrong is to look at the browser's console for details.

                        Subsequent sections discuss scenarios, as well as provide a breakdown of the HTTP headers used.
                    </p>
                </div>
                <div className='bg-emerald-500'>
                    <h1 className='text-3xl font-bold text-black p-4 text-center'>Reason of using Firebase</h1>
                </div>
                <div className='bg-emerald-300 p-4'>
                    <p>In simple words, Firebase is a software development platform that helps in building web and mobile applications with its 18 services. These 18 services of this BaaS solution also include purposeful APIs and four beta products. In addition, it is compatible to integrate with Android, web, iOS, and Unity setups.
                        1.  Realtime Database
                        No doubt, Realtime database was the first product that didn't lose its charm till now. Firebase Realtime database allows applications to approach cross-platform data within realtime after joining NoSQL cloud-storage. This Realtime database also enables you to work without internet connectivity. Even data is still being cached in the memory of your device when you are offline and start synchronizing after the internet connectivity.

                        Besides, the integration of Firebase Authentication feature also deals with the data security concerns of users. Yes, when you use a Realtime database, you can set the data permissions, which is another great advantage of using Firebase.

                        2. Cloud Firestore
                        Another advantage of Firebase is its Cloud Firestore. This NoSQL database makes it easy for programmers to transfer and store data for front and backend development. This cloud database is also known for its Realtime updates, flexible data models, offline support, and quick data inquiries
                        3.  Fast & Safe Hosting
                        Another appealing advantage of Firebase is its secure & fast hosting services. Firebase hosting supports all content types, including web applications, dynamic and static content. Moreover, either you want to host your Express.js microservices, HTML, CSS, or APIs, the hosting support of Firebase is always there. It means Firebase hosts a diverse variety of content.
                        4. Provides A Free Start to Newbies
                        If you are a newbie programmer and willing to know the core advantage of Firebase, then you consider its free start feature. Yes, Firebase allows coders to develop their applications without investing a single penny. With the free services of Firebase, it is convenient for beginners to understand how their app works in a real environment.
                    </p>
                </div>
                <div className='bg-emerald-500'>
                    <h1 className='text-3xl font-bold text-black p-4 text-center'>Other options of Authentication:</h1>
                </div>
                <div className='bg-emerald-300 p-4'>
                    <p>1. STYTCH 2. Ory 3.  Supabase  4. Okta 5. PingIdentity 6. Keycloak 7.  Frontegg 8.  Authress 9. Auth0  10. Firebase 11. Amazon Cognito  12.OneLogin  13.MongoDB</p>
                </div>
                <div className='bg-emerald-500'>
                    <h1 className='text-3xl font-bold text-black p-4 text-center'>How does the Private Route work ?</h1>
                </div>
                <div className='bg-emerald-300 p-4'>
                    <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                        The user will serve us either as logged in or logged out user. Next we are going to protect our first route. Therefore, we will start by implementing a redirect with React Router in the Home component where we already passed the user as prop to the component.
                        When there is a logged in user, the Home component does not run into the if-else condition's block and renders the actual content of the Home component instead. However, if there is no logged in user, the Home component renders React Router's Navigate component and therefore redirects a user to the Landing page. In the case of a user being on the Home page and logging out by clicking the button, the user will experience a redirect from the protected page.
                    </p>
                </div>
                <div className='bg-emerald-500'>
                    <h1 className='text-3xl font-bold text-black p-4 text-center'>What is Node? How does Node work?</h1>
                </div>
                <div className='bg-emerald-300 p-4 text-black'>
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                        Node.js basically works on two concept

                        Asynchronous
                        Non-blocking I/O
                        Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.
                        Asynchronous: Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.

                        To implement the concept of the system to handle the request  node.js uses the concept of Libuv.

                        Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.

                        Libuv implements two extremely important features of node.js

                        Event loop
                        Thread pool
                        Event loop: The event loop contains a single thread and is responsible for handling easy tasks like executing callbacks and network I/O. When the program is to initialize all the top-level code is executed, the code is not in the callback function. All the applications code that is inside callback functions will run in the event loop. EventLoop is the heart of node.js. When we start our node application the event loop starts running right away. Most of the work is done in the event loop.

                        Nodejs use event-driven-architecture.

                        Events are emitted.
                        Event loop picks them up.
                        Callbacks are called.
                        Event queue: As soon as the request is sent the thread places the request into a queue. It is known as an event queue. The process like app receiving HTTP request or server or a timer will emit event as soon as they are done with the work and event loop will pick up these events and call the callback functions that are associated with each event and response is sent to the client.

                        The event loop is an indefinite loop that continuously receives the request and processes them. It checks the queue and waits for the incoming request indefinitely.

                        Thread pool: Though node.js is single-threaded it internally maintains a thread pool. When non-blocking requests are accepted there are processed in an event loop, but while accepting blocking requests it checks for available threads in a thread pool, assigns a thread to the client's request which is then processed and send back to the event loop, and response is sent to the respective client.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;