//Model
interface Model<TData, TMethods> {
  data: TData;
  methods: TMethods;
}

//Properties
interface IUser {
  firstName: string;
  lastName: string;
}
//Methods
interface IMethods {
  fullName(): string;
}

type model = Model<IUser, IMethods>;

class UserCls implements model {
  data: IUser;
  methods: IMethods;

  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.methods = {
      fullName: () => `${firstName} ${lastName}`,
    };
  }
}

const userFullName = new UserCls("Sharif", "Rahat");
console.log(userFullName.methods.fullName());
