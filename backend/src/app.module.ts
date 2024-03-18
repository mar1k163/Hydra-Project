import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./user/entities/user.entity";
import { AuthModule } from "./auth/auth.module";
import { UserStatusModule } from "./user-status/user-status.module";
import { CalculationModule } from "./calculation/calculation.module";
import { CustomersModule } from "./customers/customers.module";
import { CalculationStateModule } from "./calculation_state/calculation_state.module";
import { UsersGroupModule } from "./users_group/users_group.module";
import { ResultsModule } from "./results/results.module";
import { StructuralElementBasementModule } from "./structural_element_basement/structural_element_basement.module";
import { CalculationEntity } from "./calculation/entities/calculation.entity";
import { CalculationStateEntity } from "./calculation_state/entities/calculation_state.entity";
import { CustomersEntity } from "./customers/entities/customer.entity";
import { ResultsEntity } from "./results/entities/result.entity";
import { BasementEntity } from "./structural_element_basement/entities/structural_element_basement.entity";
import { UserStatusEntity } from "./user-status/entities/user-status.entity";
import { UsersGroupEntity } from "./users_group/entities/users_group.entity";
import { UserUsergroupModule } from "./user_usergroup/user_usergroup.module";
import { UserUsergroupEntity } from "./user_usergroup/entities/user_usergroup.entity";
import { OpeningModule } from "./openings/opening.module"; 
import { MaterialsModule } from './materials/materials.module';
import { StructuralElementFrameModule } from './structural_element_frame/structural_element_frame.module';
import { Materials } from './materials/entity/materials.entity';
import { StructuralElementFrame } from './structural_element_frame/entity/structural_element_frame.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "cornelius.db.elephantsql.com",
      port: 5432,
      username: "jioacjwx",
      password: "Hq0iowvcTmEAGgYc6dVDviND_KzzhY98",
      database: "jioacjwx",
      entities: [
        UserEntity,
        CalculationEntity,
        CalculationStateEntity,
        CustomersEntity,
        ResultsEntity,
        BasementEntity,
        UserStatusEntity,
        UsersGroupEntity,
        UserUsergroupEntity,
        Materials,
        StructuralElementFrame,
      ],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    CalculationModule,
    CustomersModule,
    ResultsModule,
    StructuralElementBasementModule,
    UserStatusModule,
    UsersGroupModule,
    CalculationStateModule,
    UserUsergroupModule,
    OpeningModule,
    MaterialsModule,
    StructuralElementFrameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
