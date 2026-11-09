## TypeScript's Type Hierarchy - any, unknown and never

   TypeScript's type hierarchy is a model which represents the datatype of type script. The first type is known as top type which stores any and unknown both type of data and last type is bottom type which represents only never type. Top type data has three subset one is core type (str, number), another is unit type (void) and last one is nuuliish type (null). The fact is that the subsets of top type, are not connected to each other that means one type of data can't keep in another type data. Also literal type is the subset of core types and unit-sub-type is the subset of unit type. All types of datatype from top types are connected with bottom type (never).

    Top Type - Any and Unknown:
        Any : 
            When declared a datatype to any then it stores all types of data like it can be stored string, number, boolean etc. The main problem is that, if declares any, the type can be changed by storing string, nuber or boolen, depends which type of data is stored. Without string, it can't detect the other datatype. 
            For example:

                const x : any = ("Hello World");
                console.log(x.length); -> returns 11

                const x : any = 12456;
                console.log(x.length); -> returns Undefined

                const x : any = true;
                console.log(x.length); -> returns Undefined
        
        Unknown : 
            When declared unknown of any datatype, if it stores string, number or boolean, it can't detected and response as unknown.
            For example :

                const x : unknown = 12456;
                console.log(x.length); -> 'x' is of type 'unknown'.
            
            Here stores a number, when try to check the length the it can't detect as number. Also it can be happened both string and boolen.

                const x : unknown = ("Hello World");
                console.log(x.length); -> 'x' is of type 'unknown'.

                const x : unknown = true;
                console.log(x.length); -> 'x' is of type 'unknown'.
        
        
        For both types of datatype any and unknown have merits and demerits too. But unknown datatype is more preferred than any. Because it throws error that's why when user writing code, faces an error and can modify the code but on the other hand any doesn't throw wny error rather it throws undefined accept string, so that user can more confused to find mistake.


    Bottom Type - Never:
        At bottom type data any datatype can't assign. But it can assign with any types. It is the low power data that's why any data can't store and it is declared as never. It is the last set of the hierarchy model. It is used at narrowing down. 

        For example:
            const a:never = 32; -> Type '32' is not assignable to type 'never'. 
        
        InEquality :
            const print = (x: string | string[] | null)=>{
                if(x!=null){
                    if(typeof x === "object"){
                        for(let str of x){
                            console.log(str);
                        }
                    }
                    else{
                        console.log(x);
                    }
                }
                else{
                    console.log(" ");   // <- Bottom Type : never
                }
            };
            print(null); -> <empty string>
        
        Throw Error :
            const gerError = (msg:string)=>{
                throw new Error(msg);
            }

            const err : string = gerError("You can't access");
            console.log(err);   -> Uncaught Error :  You can't access


    To conclude, From top type data can easily move any subset of the datatype. If datatype is any or unknown, user can easily stores any types of data it can be core, unit type or nullish tpe. When user goes to narrowing then reaches the botton type never. It is the last narrowing part. After that no other datatype can access. 